import { buildLegacyTheme } from "sanity";

const props = {
    "--my-white": "#F7F7F7",
    "--my-black":"#302733",
    "--my-green":"#6AA497",
    "--my-pink":"#FFC1CE",
    "--my-yellow":"#F7DFA7"
}

export const myTheme = buildLegacyTheme({
    /* base colors */
    "--black": props["--my-black"],
    "--white": props["--my-white"],
    "--gray": "#666",
    "--gray-base": "#666",
    
    "--component-bg": props ["--my-green"],
    "--component-text-color": props ["--my-white"],

    /*brand*/
    "--default-button-color": "#666",
    "--default-button-primary-color": props ["--my-green"],
    "--default-button-success-color": props ["--my-pink"],
    "--default-button-warning-color": props ["--my-yellow"],
    // "--default-button-danger-color": props ["--my-red"],

    /*state*/
    "--state-info-color": props ["--my-green"],
    "--state-success-color": props ["--my-pink"],
    "--state-warning-color": props ["--my-yellow"],
    // "--state-danger-color": props ["--my-red"],

    /*navbar*/
    "--main-navigation-color": props["--my-black"],
    "--main-navigation-color--inverted": props["--my-white"],

    "--focus-color": props["--my-green"]
})