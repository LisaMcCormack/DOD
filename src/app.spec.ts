import DOD from './app'


/*
it('prompts the user for an answer', async () => {
    const prompt = jest.fn().mockResolvedValue('meow')
    const consolelog = jest.fn()
    //

    await DOD(prompt, consolelog)

    //
    expect(prompt).toBeCalledWith('Tell me to shout something')
    expect(consolelog).toBeCalledWith('MEOW')
})*/

// it('asks the first question in the questions array', async () => {
//     const prompt = jest.fn()
//     const consolelog = jest.fn()
//     await DOD(prompt, consolelog)
//     expect(prompt).toBeCalledWith("It is live and can be used (y/n) ")
// })

it('when user answers y it asks the next question', async () => {
    const prompt = jest.fn().mockResolvedValue('y')
    const consolelog = jest.fn()
    const questions = ['how are you?', 'will this work?']
    await DOD(prompt, consolelog, questions)

    expect(prompt).toBeCalledWith(questions[1])
})

it('say checks didnt pass if user says n', async() => {
    const prompt = jest.fn().mockResolvedValue('n')
    const consolelog = jest.fn()
    const questions = ['how are you?']
    await DOD(prompt, consolelog, questions)

    expect(consolelog).toBeCalledWith("All checks not passed")
})

it('says all checks passed is users says y', async() => {
    const prompt = jest.fn().mockResolvedValue('y')
    const consolelog = jest.fn()
    const questions = ['how are you?']
    await DOD(prompt, consolelog, questions)
    expect(consolelog).toBeCalledWith("All checks passed")
})

it('if the user answers no, it collects all the questions in an array', async() => {
    const prompt = jest.fn().mockResolvedValue('n')
    const consolelog = jest.fn()
    const questions = ['how are you?', 'will this work?']
    let notComplete:string[] = []
    await DOD(prompt, consolelog, questions, notComplete)
    expect(notComplete.length).toEqual(2)
})


