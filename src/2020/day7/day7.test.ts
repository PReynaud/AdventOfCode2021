import { parseRule } from './';
import { parseRule as parseRule2, countBags } from './part2';

describe('Day 7', () => {
  it('should correctly parse a bag from string', () => {
    expect(
      parseRule(
        'light red bags contain 1 bright white bag, 2 muted yellow bags.'
      )
    ).toEqual({
      name: 'light red',
      content: ['bright white', 'muted yellow'],
    });

    expect(parseRule('drab lime bags contain 4 dim maroon bags.')).toEqual({
      name: 'drab lime',
      content: ['dim maroon'],
    });
  });

  it('should correctly parse a bag from string', () => {
    expect(
      parseRule2(
        'light red bags contain 1 bright white bag, 2 muted yellow bags.'
      )
    ).toEqual({
      name: 'light red',
      content: [
        {
          name: 'bright white',
          numberOfBags: 1,
        },
        {
          name: 'muted yellow',
          numberOfBags: 2,
        },
      ],
    });

    expect(parseRule2('drab lime bags contain 4 dim maroon bags.')).toEqual({
      name: 'drab lime',
      content: [{ name: 'dim maroon', numberOfBags: 4 }],
    });

    expect(parseRule2('clear red bags contain no other bags.')).toEqual({
      name: 'clear red',
      content: [],
    });
  });

  it('should coount the number of bags', () => {
    const listOfBags = [
      {
        name: 'light red',
        content: [{ name: 'bright white', numberOfBags: 5 }],
      },
      {
        name: 'bright white',
        content: [{ name: 'drab lime', numberOfBags: 3 }],
      },
      { name: 'drab lime', content: [] },
    ];
    const bagContent = {
      name: 'light red',
      numberOfBags: 1,
    };
    expect(countBags(bagContent, listOfBags)).toEqual(21);
  });
});
