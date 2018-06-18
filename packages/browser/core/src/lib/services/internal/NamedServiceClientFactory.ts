import { StitchAppClientInfo } from "mongodb-stitch-core-sdk";
import StitchServiceClient from "./StitchServiceClient";

export default interface NamedServiceClientFactory<T> {
  getClient(service: StitchServiceClient, client: StitchAppClientInfo): T;
}