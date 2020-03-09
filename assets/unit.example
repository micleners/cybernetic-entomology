--- Square Service File ---

public class SquareService {

    public Double area(Double r)
    {
        return r * r;
    }
}

--- Test File ---

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

public class SquareServiceTest {

    SquareService squareService;

    @Before
    public void init()
    {
        squareService = new SquareService();
    }

    @Test
    public void calculateAreaOfSquare()
    {
        Double expectedArea = 25;
        Double actualArea = this.squareService.area(5.0d);
        Assert.assertEquals(expectedArea, actualArea);
    }
}



