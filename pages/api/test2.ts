import { NextApiHandler } from "next";
import prisma from "src/inits/prisma.server";

const Test: NextApiHandler = async (req, res) => {
    if (req.method === "GET") {
        const test = await prisma.user.findMany();

        console.log(test);

        res.status(200).send(test);
    }
};

export default Test;
