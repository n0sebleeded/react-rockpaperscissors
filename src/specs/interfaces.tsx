import React, {SetStateAction} from "react";

/*
export interface ICard extends ICardGroup{
    Text:string,
    Hidden:boolean
}

export interface ICardGroup {
    PlayerSide: boolean,
}*/

import {ReactNode} from "react";
import {UseFormRegister} from "react-hook-form";
import Stomp from "stompjs";
import {Transition, Variants} from "framer-motion";

export interface ILobby {
    "id":string
    "playersId": string[]
    "bet": number,
    "readyPlayersNumber": number,
    "creatorUsername": string,
    "creatorElo": number,
    "title":string,
}

export interface ILobbyProps {
    "id":string
    "bet": number,
    "creatorUsername": string,
    "elo": number,
    "title":string,
}

export interface ICard {
    id: number,
    Text: string,
    Hidden: boolean,
    Type:ICardType,
    stompClient?: Stomp.Client
}

export interface ICords {
    x:number,
    y:number
}

export interface INotification {
    state: boolean,
    success: boolean
}

export interface INotificationProp {
    setShowNotification: React.Dispatch<React.SetStateAction<INotification>>
}

export interface IForm {
    login?: boolean;
    setData?: React.Dispatch<SetStateAction<ILogData>> | null;
    data: ILogData | null;
    register:UseFormRegister<IFormData> | null
}

export interface IProps {
    children: ReactNode;
}

export interface IFormData {
    username: string;
    passwordText: string;
    email: string;
}

export enum ICardType {
    CARD_PAPER = "CARD_PAPER",
    CARD_SCISSOR = "CARD_SCISSOR",
    CARD_ROCK = "CARD_ROCK"
}

export interface ILogData {
    username: string;
    password: string;
}

export interface ICardItemProps {
    id: number;
    Text: string;
    Hidden: boolean;
    Type: ICardType;
    stompClient: Stomp.Client; // Assuming stompClient is optional
}


export interface IAnimatedDiv {
    children: React.ReactNode;
    variant: Variants | undefined;
    transition: Transition | undefined;
    className?: string;
}