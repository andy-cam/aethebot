/**
 * Debug logging.
 */

/*
 * AetheBot - A Discord Chatbot
 *
 * Created by Tyrone Trevorrow on 05/02/17.
 * Copyright (c) 2017 Tyrone Trevorrow. All rights reserved.
 *
 * This source code is licensed under the permissive MIT license.
 */

// Allow console.log in this file -- it's a damn logger
/* tslint:disable:no-console */

export function log(msg: string) {
    console.log(msg)
    return
    // const debug = (process.env.NODE_ENV || "development") === "development"
    // if (debug) {
    //     console.log(msg)
    // }
}
