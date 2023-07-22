import ErrorRepository from "../js/ErrorRepository";

test.each([
    [1, 'Недопустимое значение'],
    [234, 'Unknown error']
])(('check ErrorRepository'), (code, expected) => {
    const errorContainer = new ErrorRepository();
    const received = errorContainer.translate(code);

    expect(received).toBe(expected)
})