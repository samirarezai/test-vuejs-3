import { createVuetify, type ThemeDefinition } from 'vuetify'
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const myCustomLightTheme: ThemeDefinition = {
    dark: true  ,
    colors: {
        // background: '#ac1818',
        surface: '#415c80',
        primary: '#284b8f',
        'primary-darken-1': '#3700B3',
        secondary: '#03DAC6',
        'secondary-darken-1': '#018786',
        error: '#B00020',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
    },
}

export default createVuetify({
    theme: {
        defaultTheme: 'myCustomLightTheme',
        themes: {
            myCustomLightTheme,
        },
    },
    components,
    directives,
})
