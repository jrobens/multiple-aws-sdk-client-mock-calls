
import {mockClient} from "aws-sdk-client-mock";
import {PutItemCommand, DynamoDBClient} from "@aws-sdk/client-dynamodb";
import {putItems} from "./multiple";

describe('Multiple', () => {
    const ddbMock = mockClient(DynamoDBClient);

    beforeEach(() => {
        ddbMock.reset();
        jest.clearAllMocks();
    });
    test('test one', async () => {
        await putItems();
        const putItemCalls = ddbMock.commandCalls(PutItemCommand);
        const savedPutItemCommandInput = putItemCalls[0].args[0];
        expect(putItemCalls.length).toBe(1)
        expect(savedPutItemCommandInput).toBeTruthy();
        expect(savedPutItemCommandInput.input.Item.a).toEqual({"N": "3"});
    })
    test('test two', async () => {
        await putItems();
        const putItemCalls = ddbMock.commandCalls(PutItemCommand);
        const savedPutItemCommandInput = putItemCalls[0].args[0];
        expect(putItemCalls.length).toBe(1);
        expect(savedPutItemCommandInput).toBeTruthy();
        expect(savedPutItemCommandInput.input.Item.a).toEqual({"N": "3"});

    })
});
