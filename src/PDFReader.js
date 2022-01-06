import React from 'react';

import { Platform, Text } from 'react-native';

import OriginalPDFReader from 'rn-pdf-reader-js';

export default function PDFReader(props) {
    return Platform.OS === 'web' ? (
        <object
            {...props}
            type="application/pdf"
            data={props.source && (props.source.uri || props.source.base64)}
        >
            <Text>Could not load PDF. Make sure the source is correct and the browser is not on device mode.</Text>
        </object>
    ) : (
        <OriginalPDFReader
            {...props}
        />
    );
}
