import {
    AttributeValue,
    PutItemCommand,
    PutItemCommandInput,
    PutItemInput
} from "@aws-sdk/client-dynamodb";
import {marshall} from "@aws-sdk/util-dynamodb";
import {ddbClient} from "./ddbClient";

export const putItems = async () => {
    const params: PutItemCommandInput = {
        TableName: "abc",
        Item: {}
    };
    // const ddbClient = new DynamoDBClient({ region: 'ap-southeast-2'});
    const marshalled: { [key: string]: AttributeValue } = marshall({a: 3}) as { [key: string]: AttributeValue };
    let paramsLocal: PutItemInput = {...params, Item: marshalled};
    try {
        return await ddbClient.send(new PutItemCommand(paramsLocal));
    } catch (err) {
        console.error("Failed to upload configuration", err);
        throw err
    }
}
