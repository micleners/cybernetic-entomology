--- Circle Service File ---

public class CircleService {

  public Double area(Double r)
  {
    return Math.PI * r * r;
  }
}

--- Enum File ---

public enum Type {
  SQUARE,CIRCLE;
}

--- Helper Service ---

public class CalculateArea {

  SquareService squareService;
  CircleService circleService;

  CalculateArea(
    SquareService squareService, CircleService circleService
    )
  {
    this.squareService = squareService;
    this.circleService = circleService;
  }

  public Double calculateArea(Type type, Double r )
  {
    switch (type)
    {
      case SQUARE:
        if(r.length >=1)
          return squareService.area(r[0]);
        else
          throw new RuntimeException("Missing required param");

      case CIRCLE:
        if(r.length >=1)
          return circleService.area(r[0]);
        else
          throw new RuntimeException("Missing required param");
      default:
        throw new RuntimeException("Operation not supported");
    }
  }
}

--- Test File ---

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.mockito.Mockito;

public class CalculateAreaTest {

  SquareService squareService;
  CircleService circleService;
  CalculateArea calculateArea;

  @Before
  public void init()
  {
    squareService = Mockito.mock(SquareService.class);
    circleService = Mockito.mock(CircleService.class);
    calculateArea = new CalculateArea(
      squareService, circleService
      );
  }

  @Test
  public void calculateSquareAreaTest()
  {
    Mockito.when(square.area(5.0d)).thenReturn(25);
    Double calculatedArea = 
      this.calculateArea.calculateArea(Type.SQUARE, 5.0d);
    Assert.assertEquals(new Double(25d),calculatedArea);
  }
}