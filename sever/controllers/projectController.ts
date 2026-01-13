import {Request, Response} from 'express'
import prisma from '../lib/prisma.js';
import openai from '../configs/openai.js';


// Controller Function to Make Revision
export const makeRevision = async (req: Request, res: Response) => {
    const userId = req.userId;

    try {
        
        const {projectId} = req.params;
        const {message} = req.body;

        const user = await prisma.user.findUnique({
            where: {id: userId}
        })

        if(!userId){
            return res.status(401).json({ message: 'Unauthorized' });
        }
            
        res.json({credits: user?.credits})
    } catch (error: any) {
        console.log(error.code || error.message);
        res.status(500).json({ message: error.message });
    }
}