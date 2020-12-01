const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: 587,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
});

async function wait(ms= 0) {
    return new Promise(
        (resole, reject) => setTimeout(resolve, ms)
    )
}

function createMailBody(order, total) {
    return `<div> 
        <h2>Your Recent Order for ${total}</style>
        <p>We will have your order ready in the next 20 minutes.</p>
        <ul>
            ${order.map(item => `<li>
                <img src="${item.thumbnail}" alt="${item.name}" />
                ${item.name} (${item.size}): ${item.price} 
            </li><br>`).join('')}
        </ul>
        <p>The total of <string>${total}</strong> is due at pickup.</p>
        <style>
            ul {
              list-style: none  
            }
        </style>
    </div>`
    
}

exports.handler = async (event, context) => {
    
    const body = JSON.parse(event.body)

    console.log(body)
    
    // check if they filled out the honeypot
    if (body.mapleSyrup) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: 'ERROR 3432 - User not regocnized'})
            // stupid error, so if someone asks about it, you know the have hit the honeypot
        }
    }

    // check fields
    const requiredFields = ['email', 'name']
    let message = ''
    for (let field of requiredFields) {
        if (!body[field]){
           message += `No value in field ${field}. `
        }
    }
    if (!body.order.length) {
        message += 'Order is empty. '
    }
    if (message) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message })
        }
    }

    // send mail
    const info = await transporter.sendMail({
        from: "Slick's Slices <slicks@example.com>",
        to: `${body.name} <${body.email}>`,
        subject: "Pizza Order",
        html: createMailBody(body.order, body.total)
    })

    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Success' }),
    }
 
    //test
    // despite here different to-address the mail goes still to MAIL_USER
    // const info = await transporter.sendMail({
    //     from: "Slick's Slices <slicks@example.com>",
    //     to: "gzoppelt1@gmail.com",
    //     subject: "Test of NodeMailer",
    //     html: `
    //         <h2>The test is successfull</h2>
    //         <p>Wenn Du das lesen kannst, dann bin ich nicht doof!</p>
    //     `
    // })

    // return {
    //     statusCode: 200,
    //     body: JSON.stringify(info)
    // }
}