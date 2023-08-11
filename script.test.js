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
    
    // Call the getWeather function with Seattle as the city
    const response = await getWeather('Seattle');

    // Check if the response from getWeather matches the expected values
    expect(response.name).toBe('Seattle'); // city
    expect(response.country).toBe('US'); // country code
    expect(response.temperature).toBe(25); // degrees in celsius
    expect(response.description).toBe('Sunny'); // weather description

    // Clean up the mock fetch implementation after the test
    global.fetch.mockClear();
    delete global.fetch;
});
