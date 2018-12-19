import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class userdetails {
  @JsonProperty('fullname', String, true)
  public fullname: string = undefined;

  @JsonProperty('gender', String, true)
  public gender: string = undefined;

  @JsonProperty('dob', Date, true)
  public dob: Date = undefined;

  @JsonProperty('idNo', Number, true)
  public idNo: number = undefined;

}