import {test} from "../fixtures/myFixtures"

test("fixture test", async ({age, email}) => {
    console.log("Age: " + age + "\nEmail: " + email);
})