import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class rejectCount {
  @JsonProperty('addrej', Number, true)
  public addrej: number = undefined;

}