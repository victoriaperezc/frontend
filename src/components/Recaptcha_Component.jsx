import React, { useRef } from 'react';
import { View } from 'react-native';
import Recaptcha from 'react-grecaptcha';

const siteKey = "6LemAHAdAAAAAGwUs-eTOHvNklVk4xffp5LfZC1L";

export var validCaptcha = false;

export const Recaptcha_Component = () => {

    const captcha = useRef(null);

    const verifyCallback = response => {
        if (response)
            validCaptcha = true;
    };

    const expiredCallback = () => { };

    return (
        <View>
            <Recaptcha
                ref={captcha}
                sitekey={siteKey}
                callback={verifyCallback}
                expiredCallback={expiredCallback}
                locale="es-ES"
                className="customClassName"
                data-theme="light"
            />
        </View>
    )

}

