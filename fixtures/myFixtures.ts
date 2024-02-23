import {test as myTest} from "@playwright/test"

type employee = {
    age: string,
    email: string
}

const myFixtureTest = myTest.extend<employee>({
    age: "25",
    email: "testmail_10@getMaxListeners.com"
})

export const test = myFixtureTest