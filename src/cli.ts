async function readLine(): Promise<string> {
    return new Promise((resolve, reject) => {
        process.stdin.once('data', (data) => {
            resolve(data.toString().trim())
        })
    })
}

export async function prompt(question: string): Promise<string> {
    console.log(question)
    return readLine()
}
