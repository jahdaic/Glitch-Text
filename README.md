# Glitch Text
A simple JavaScript plugin that can be used to add a variety of glitching text effects to a website.

__NOTE:__ This is basically a proof-of-concept currently and needs some refinement. It works, but currently has a couple of drawbacks and does no yet implement all glitch types that are planned.

[View Example](https://jahdaic.github.io/Glitch-Text/test/test.html)


[Donate](https://jahdaic.github.io/Glitch-Text)

# Documentation & Usage Examples

## Features

  * Lightweight (~1kb minified).
  * No dependencies.
  * Initialize with JS or jQuery.
  * Customizable options.

## Usage

```
// Initialize with jQuery
$('.glitch-text').glitch();

// Initialize with options
$('.glitch-text').glitch({ speed: 100 });
```

## Options

| Name     | Type    | Default      | description                                           |
| -------- |-------- | ------------ | ----------------------------------------------------- |
| duration | number  | 2000         | The duration of the effect in milliseconds            |
| speed    | number  | 300          | How often the effect refreshes in milliseconds        |
| rate     | decimal | 0.1          | The chance for a letter to change (substitution only) |
| chars    | array   | ϟ, !, /, $   | An array of characters used for substitution          |
| type     | string  | substitution | The type of glitch                                    |

## Want to buy me a beer/coffee/chimichanga? :heart_eyes:
[https://paypal.me/jahdaic](https://paypal.me/jahdaic)

## Compatibility
Glitch Text Plugin has been tested with jQuery 1.7+ on all major browsers:

 * Firefox 2+ (Win, Mac, Linux);
 * IE7+ (Win);
 * Chrome 6+ (Win, Mac, Linux, Android, iPhone);
 * Safari 3.2+ (Win, Mac, iPhone);
 * Opera 8+ (Win, Mac, Linux, Android, iPhone).
 * Android Default Browser v4+

## Bugs?
Did you read the [documentation](https://jahdaic.github.io/Glitch-Text)? Yes? Cool! So now... make sure that you have a *functional* [jsfiddle](http://jsfiddle.net/) exemplifying your problem and open an [issue](https://github.com/jahdaic/Glitch-Text/issues).

## Contributing
 * **Bug Reporting**: Yes! You can contribute opening [issues](https://github.com/jahdaic/Glitch-Text/issues)!
 * **Documenting**: Do you think that something in our [docs](https://jahdaic.github.io/Glitch-Text) should be better? Do you have a cool idea to increase the awesomeness? Summit your pull request with your idea!
 * **Improving**: Open an [issue](https://github.com/jahdaic/Glitch-Text/issues) and let's discuss it. Just to make sure that you're on the right track.
 * **Sharing**: Of course! Have I saved you some time? Are you enjoying the plugin? Sharing is caring! Tweet it! Facebook it! LinkedIn It(?!)
 * **Donating**: Buy me a coffee. Although honestly I'm probably going to spend it at Taco Bell or on Xbox Live.
