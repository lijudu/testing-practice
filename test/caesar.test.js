const caesar = require('../code/caesar')

test('caesar', () => {
    expect(caesar('Hello everyone! Not Jeff!', 3)).toBe('Khoor hyhubrqh! Qrw Mhii!')
})