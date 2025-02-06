package xcal.cs.math.model;

import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonProperty;

public class MultiplicationRequest {

  @JsonProperty
  @NotNull
  private long multiplicand;

  @JsonProperty
  @NotNull
  private long multiplier;

  public MultiplicationRequest(long multiplicand, long multiplier) {
    this.multiplicand = multiplicand;
    this.multiplier = multiplier;
  }

  @SuppressWarnings("unused") // for Jackson
  private MultiplicationRequest() {}

  public long getMultiplicand() {
    return multiplicand;
  }

  public long getMultiplier() {
    return multiplier;
  }
}
