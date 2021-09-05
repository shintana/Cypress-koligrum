Feature: BDD Atlas Homepage Colour Quote

    I want to be able to submit quote in various Colour

    @TC001 @BlueColour
    Scenario: I want to be able to submit a Blue Quote
        Given I open BDD Atlas Web
        When I type a quote: test add quote
        And I choose the Blue colour
        Then I verify a quote submitted "Blue" and "test add quote"
        Then I verify quote has been deleted: test

    @TC002 @AllColour
    Scenario Outline: I want to be able to submit a Cyan Quote
        Given I open BDD Atlas Web
        When I type a quote: test add quote
        And I choose the <colour> colour
        Then I verify a quote submitted "<colour>" and "test add quote"
        Then I verify quote has been deleted: test
        Examples:
            | colour | 
            | White  |
            | Yellow |
            | Cyan   |