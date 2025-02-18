package xcal.cs.math.model;

import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DivisionResponse {

  @JsonProperty
  @NotNull
  private Integer quotient;

  @JsonProperty
  @NotNull
  private Integer remainder;

  public DivisionResponse(int quotient, int remainder) {
    this.quotient = quotient;
    this.remainder = remainder;
  }

  @SuppressWarnings("unused") // for Jackson
  private DivisionResponse() {}

  public int getQuotient() {
    return quotient;
  }

  public int getRemainder() {
    return remainder;
  }
}
