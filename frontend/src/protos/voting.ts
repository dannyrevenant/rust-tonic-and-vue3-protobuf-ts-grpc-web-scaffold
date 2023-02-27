// @generated by protobuf-ts 2.8.2
// @generated from protobuf file "voting.proto" (package "voting", syntax proto3)
// tslint:disable
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message voting.Vote
 */
export interface Vote {
    /**
     * @generated from protobuf field: int32 id = 1;
     */
    id: number;
    /**
     * @generated from protobuf field: string url = 2;
     */
    url: string;
    /**
     * @generated from protobuf field: int32 count = 3;
     */
    count: number;
}
/**
 * @generated from protobuf message voting.VotingIndexRequest
 */
export interface VotingIndexRequest {
}
/**
 * @generated from protobuf message voting.VotingIndexResponse
 */
export interface VotingIndexResponse {
    /**
     * @generated from protobuf field: repeated voting.Vote votes = 1;
     */
    votes: Vote[];
}
/**
 * @generated from protobuf message voting.VotingGetRequest
 */
export interface VotingGetRequest {
    /**
     * @generated from protobuf field: int32 id = 1;
     */
    id: number;
}
/**
 * @generated from protobuf message voting.VotingGetResponse
 */
export interface VotingGetResponse {
    /**
     * @generated from protobuf field: voting.Vote vote = 1;
     */
    vote?: Vote;
}
/**
 * @generated from protobuf message voting.VotingRequest
 */
export interface VotingRequest {
    /**
     * @generated from protobuf field: voting.VotingRequest.VoteValue vote = 2;
     */
    vote: VotingRequest_VoteValue;
    /**
     * @generated from protobuf field: string url = 1;
     */
    url: string;
}
/**
 * @generated from protobuf enum voting.VotingRequest.VoteValue
 */
export enum VotingRequest_VoteValue {
    /**
     * @generated from protobuf enum value: UP = 0;
     */
    UP = 0,
    /**
     * @generated from protobuf enum value: DOWN = 1;
     */
    DOWN = 1
}
/**
 * @generated from protobuf message voting.VotingResponse
 */
export interface VotingResponse {
    /**
     * @generated from protobuf field: voting.Vote vote = 1;
     */
    vote?: Vote;
}
// @generated message type with reflection information, may provide speed optimized methods
class Vote$Type extends MessageType<Vote> {
    constructor() {
        super("voting.Vote", [
            { no: 1, name: "id", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "url", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "count", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value?: PartialMessage<Vote>): Vote {
        const message = { id: 0, url: "", count: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Vote>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Vote): Vote {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 id */ 1:
                    message.id = reader.int32();
                    break;
                case /* string url */ 2:
                    message.url = reader.string();
                    break;
                case /* int32 count */ 3:
                    message.count = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: Vote, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int32 id = 1; */
        if (message.id !== 0)
            writer.tag(1, WireType.Varint).int32(message.id);
        /* string url = 2; */
        if (message.url !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.url);
        /* int32 count = 3; */
        if (message.count !== 0)
            writer.tag(3, WireType.Varint).int32(message.count);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message voting.Vote
 */
export const Vote = new Vote$Type();
// @generated message type with reflection information, may provide speed optimized methods
class VotingIndexRequest$Type extends MessageType<VotingIndexRequest> {
    constructor() {
        super("voting.VotingIndexRequest", []);
    }
    create(value?: PartialMessage<VotingIndexRequest>): VotingIndexRequest {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<VotingIndexRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: VotingIndexRequest): VotingIndexRequest {
        return target ?? this.create();
    }
    internalBinaryWrite(message: VotingIndexRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message voting.VotingIndexRequest
 */
export const VotingIndexRequest = new VotingIndexRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class VotingIndexResponse$Type extends MessageType<VotingIndexResponse> {
    constructor() {
        super("voting.VotingIndexResponse", [
            { no: 1, name: "votes", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Vote }
        ]);
    }
    create(value?: PartialMessage<VotingIndexResponse>): VotingIndexResponse {
        const message = { votes: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<VotingIndexResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: VotingIndexResponse): VotingIndexResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated voting.Vote votes */ 1:
                    message.votes.push(Vote.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: VotingIndexResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated voting.Vote votes = 1; */
        for (let i = 0; i < message.votes.length; i++)
            Vote.internalBinaryWrite(message.votes[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message voting.VotingIndexResponse
 */
export const VotingIndexResponse = new VotingIndexResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class VotingGetRequest$Type extends MessageType<VotingGetRequest> {
    constructor() {
        super("voting.VotingGetRequest", [
            { no: 1, name: "id", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value?: PartialMessage<VotingGetRequest>): VotingGetRequest {
        const message = { id: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<VotingGetRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: VotingGetRequest): VotingGetRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 id */ 1:
                    message.id = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: VotingGetRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int32 id = 1; */
        if (message.id !== 0)
            writer.tag(1, WireType.Varint).int32(message.id);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message voting.VotingGetRequest
 */
export const VotingGetRequest = new VotingGetRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class VotingGetResponse$Type extends MessageType<VotingGetResponse> {
    constructor() {
        super("voting.VotingGetResponse", [
            { no: 1, name: "vote", kind: "message", T: () => Vote }
        ]);
    }
    create(value?: PartialMessage<VotingGetResponse>): VotingGetResponse {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<VotingGetResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: VotingGetResponse): VotingGetResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* voting.Vote vote */ 1:
                    message.vote = Vote.internalBinaryRead(reader, reader.uint32(), options, message.vote);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: VotingGetResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* voting.Vote vote = 1; */
        if (message.vote)
            Vote.internalBinaryWrite(message.vote, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message voting.VotingGetResponse
 */
export const VotingGetResponse = new VotingGetResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class VotingRequest$Type extends MessageType<VotingRequest> {
    constructor() {
        super("voting.VotingRequest", [
            { no: 2, name: "vote", kind: "enum", T: () => ["voting.VotingRequest.VoteValue", VotingRequest_VoteValue] },
            { no: 1, name: "url", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<VotingRequest>): VotingRequest {
        const message = { vote: 0, url: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<VotingRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: VotingRequest): VotingRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* voting.VotingRequest.VoteValue vote */ 2:
                    message.vote = reader.int32();
                    break;
                case /* string url */ 1:
                    message.url = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: VotingRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* voting.VotingRequest.VoteValue vote = 2; */
        if (message.vote !== 0)
            writer.tag(2, WireType.Varint).int32(message.vote);
        /* string url = 1; */
        if (message.url !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.url);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message voting.VotingRequest
 */
export const VotingRequest = new VotingRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class VotingResponse$Type extends MessageType<VotingResponse> {
    constructor() {
        super("voting.VotingResponse", [
            { no: 1, name: "vote", kind: "message", T: () => Vote }
        ]);
    }
    create(value?: PartialMessage<VotingResponse>): VotingResponse {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<VotingResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: VotingResponse): VotingResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* voting.Vote vote */ 1:
                    message.vote = Vote.internalBinaryRead(reader, reader.uint32(), options, message.vote);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: VotingResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* voting.Vote vote = 1; */
        if (message.vote)
            Vote.internalBinaryWrite(message.vote, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message voting.VotingResponse
 */
export const VotingResponse = new VotingResponse$Type();
/**
 * @generated ServiceType for protobuf service voting.Voting
 */
export const Voting = new ServiceType("voting.Voting", [
    { name: "Index", options: {}, I: VotingIndexRequest, O: VotingIndexResponse },
    { name: "Get", options: {}, I: VotingGetRequest, O: VotingGetResponse },
    { name: "Vote", options: {}, I: VotingRequest, O: VotingResponse }
]);
