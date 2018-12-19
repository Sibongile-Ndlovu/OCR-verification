import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class count {
  @JsonProperty('count', Number, true)
  public count: number = undefined;

}