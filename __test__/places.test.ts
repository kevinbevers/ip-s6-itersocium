
require("isomorphic-fetch");

describe("Places Tests", () => {
  it("should get return all 5 migrated places", async () => {
    expect.assertions(2);
    try {
      const url = new URL(process.env.HASURA_ENDPOINT ?? "")
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "x-hasura-admin-secret": "admin_secret",
        },
        body: JSON.stringify({
          query: `query PopularPlaces {
            places {
              details
              id
              image
              location
              name
            }
          }
          `,
          variables: {},
        }),
      });
      const { data } = await response.json();
      expect(data.places.length).toEqual(5);
      expect(data.places[0].location).toBe("Italy");
    } catch (error) {
      console.log(error);
    }
  });
});