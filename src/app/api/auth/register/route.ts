import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken';
import { IUser } from "@src/types";
import { JWT_SALT } from "@src/config";
import { User } from "@src/db/models";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { ...rest } = body;
        const _user = await User.create({ ...rest })
        const user = _user.toJSON()
        const token = await generateToken(JSON.parse(JSON.stringify(user)))

        const response = NextResponse.json({ success: true })
        response.cookies.set({
            name: 'token',
            value: token,
            httpOnly: true,
            secure: true,
            maxAge: 3600
        })
        return response
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 400 })
    }
}

const generateToken = async (user: IUser) => {
    const token = jwt.sign(user, JWT_SALT, { expiresIn: "1h" })
    return token
}