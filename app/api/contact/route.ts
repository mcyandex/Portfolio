import { transporter } from '@/lib/nodemailer'
import { contactInputValidator } from '@/validators/contact.validator'
import { ReasonPhrases, StatusCodes } from 'http-status-codes'
import { ZodError } from 'zod'

export async function POST(req: Request) {
    try {
        const body = contactInputValidator.parse(await req.json())
        await new Promise((resolve, reject) => {
            transporter.sendMail(
                {
                    from: process.env.GMAIL_USERNAME,
                    to: 'me@chirag.codes',
                    subject: `You have received a mail from ${body.name}`,
                    html: 'hello',
                },
                function (err, info) {
                    if (err) {
                        reject(err)
                    } else {
                        resolve({})
                    }
                }
            )
        })
        return new Response('ok')
    } catch (err) {
        if (err instanceof ZodError) {
            return new Response(ReasonPhrases.BAD_REQUEST, {
                status: StatusCodes.BAD_REQUEST,
            })
        }
        return new Response(ReasonPhrases.INTERNAL_SERVER_ERROR, {
            status: StatusCodes.INTERNAL_SERVER_ERROR,
        })
    }
}
