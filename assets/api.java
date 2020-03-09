@Test public void
calculate_area_returns_200_with_expected_area_for_square() {
  
  when().
    get("/CalculateArea/{shape}/{r}", "square", 5).
  then().
    statusCode(200).
    body("shape.shapeArea", equalTo(25), "shape.length", equal(5);

}






