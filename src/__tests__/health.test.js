import getHealthStatus from '../health';

test.each([
    ['healthy', { name: 'Маг', health: 90 }, 'healthy'],
    ['wounded', { name: 'Эльф', health: 50 }, 'wounded'],
    ['wounded', { name: 'Гоблин', health: 30 }, 'wounded'],
    ['wounded', { name: 'Орк', health: 15 }, 'wounded'],
    ['critical', { name: 'Ведьмак', health: 10 }, 'critical'],
])('should return %s for health %s', (_, character, expected) => {
    const result = getHealthStatus(character);
    expect(result).toBe(expected);
});
