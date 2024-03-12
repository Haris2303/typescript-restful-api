import supertest from "supertest";
import { AddressTest, ContactTest, UserTest } from "./test-util";
import { web } from "../src/application/web";
import { logger } from "../src/application/logging";

describe("POST /api/contact/:contactId/addresses", () => {
  beforeEach(async () => {
    await UserTest.create();
    await ContactTest.create();
  });
  afterEach(async () => {
    await AddressTest.deleteAll();
    await ContactTest.deleteAll();
    await UserTest.delete();
  });

  it("should be able to create address", async () => {
    const contact = await ContactTest.get();
    const response = await supertest(web)
      .post(`/api/contacts/${contact.id}/addresses`)
      .set("X-API-TOKEN", "test")
      .send({
        street: "Jalan Kece",
        city: "Manado",
        province: "Manado Utara",
        country: "Indonesia",
        postal_code: "12341",
      });

    logger.debug(response.body);
    expect(response.status).toBe(200);
    expect(response.body.data.street).toBe("Jalan Kece");
    expect(response.body.data.city).toBe("Manado");
    expect(response.body.data.province).toBe("Manado Utara");
    expect(response.body.data.country).toBe("Indonesia");
    expect(response.body.data.postal_code).toBe("12341");
  });

  it("should reject create new address if contact is not found", async () => {
    const contact = await ContactTest.get();
    const response = await supertest(web)
      .post(`/api/contacts/${contact.id + 1}/addresses`)
      .set("X-API-TOKEN", "test")
      .send({
        street: "Jalan Kece",
        city: "Manado",
        province: "Manado Utara",
        country: "Indonesia",
        postal_code: "1234",
      });

    logger.debug(response.body);
    expect(response.status).toBe(404);
    expect(response.body.errors).toBeDefined();
  });
});
