import React from 'react';

import { Platform, Text } from 'react-native';

import OriginalPDFReader from 'rn-pdf-reader-js';

export default function PDFReader(props) {
    return Platform.OS === 'web' ? (
        <object
            {...props}
            type="application/pdf"
            data={props.uri}
        >
            <Text>PDFReader Component not supported on device mode</Text>
        </object>
    ) : (
        <OriginalPDFReader
            {...props}
        />
    );
}
