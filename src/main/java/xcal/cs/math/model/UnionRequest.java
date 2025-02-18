package xcal.cs.math.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.Collection;

import javax.validation.constraints.NotNull;

public class UnionRequest {

  @JsonProperty
  @NotNull
  private Collection<Integer> left;

  @JsonProperty
  @NotNull
  private Collection<Integer> right;

  public UnionRequest(Collection<Integer> left, Collection<Integer> right) {
    this.left = left;
    this.right = right;
  }

  @SuppressWarnings("unused") // for Jackson
  private UnionRequest() {}

  public Collection<Integer> getLeft() {
    return left;
  }

  public Collection<Integer> getRight() {
    return right;
  }
}
