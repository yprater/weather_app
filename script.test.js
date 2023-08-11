import { getWeather } from './script';

test('should fetch weather data', async () => {
    // Use a mock fetch implementation for testing
    global.fetch = jest.fn(() =>
        Promise.resolve({
            ok: true,
            json: () =>
                Promise.resolve({
                    cod: 200,
                    name: 'Seattle',
                    sys: { country: 'US' },
                    main: { temp: 25 },
                    weather: [{ description: 'Sunny' }],
                }),
        })
    );

    const response = await getWeather('Seattle');
    expect(response.name).toBe('Seattle');
    expect(response.country).toBe('US');
    expect(response.temperature).toBe(25);
    expect(response.description).toBe('Sunny');

    // Clean up the mock
    global.fetch.mockClear();
    delete global.fetch;
});
