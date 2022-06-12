import { NextApiHandler } from "next";
import prisma from "src/inits/prisma.server";

const Test: NextApiHandler = async (req, res) => {
    const data = {
        name: "Hari Vishnu Parashar",
        address: "0xb91CC1FBCA90301807DF4B98f5A04f7Ce62a3806",
        bannerPic: "https:google.com",
        email: "sex.com",
        profilePic: "haha.ok",
    };

    console.log(data);

    if (req.method === "GET") {
        const test = await prisma.user.create({
            data,
        });

        res.status(200).send(test);
    }
};

export default Test;
