import { prisma } from "../../server/db/client";
import { type NextApiRequest, type NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const data = req.body;
    try {
        // @ts-ignore
        const result = await prisma.todos.update({
            where: {
                id: data.id,
              },
            data: {
                ...data,
                descripton: data.descripton
            },
        });
        res.status(200).json(result);
    } catch (err) {
        console.log(err);
        res.status(403).json({ err: "Error occured while adding a new todo." });
    }
};