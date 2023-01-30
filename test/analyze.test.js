
const analyze = require('../code/analyze')

test('analyze', () => {
    expect(analyze([1,8,3,4,2,6])).toEqual(
        {
            average: 4,
            length: 6, 
            max: 8, 
            min: 1,
        }
    )
})