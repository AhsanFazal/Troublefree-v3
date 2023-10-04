import { BaseEndpoint } from "../Base"

import { Addresses } from "./Addresses"
import { ContactPersons } from "./ContactPersons"
import { Revenue } from "./Revenue"

export class Relations extends BaseEndpoint {
  public readonly addresses: Addresses
  public readonly contactPersons: ContactPersons
  public readonly revenue: Revenue

  public constructor(httpClient: any) {
    super(httpClient)

    this.addresses = new Addresses(httpClient)
    this.contactPersons = new ContactPersons(httpClient)
    this.revenue = new Revenue(httpClient)
  }
}
