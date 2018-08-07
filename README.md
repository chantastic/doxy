**SUPSENDED UNTIL [api.churchcenter.com](api.churchcenter.com/) RELEASE**

## What happened?

Without hesitation, this first step in the project was a success. But the timing isn't quite right.

### What was accomplished?
* Typography components for iOS, Android, and web via [react-native-web](https://github.com/necolas/react-native-web).
* `space` system:

#### `space`
We explored a bunch of different and determined them to be too magical or overreaching.
By using a function, we opt out of any platform discrepencies and CSS consistency issues.

Consider the potential complications of a props-based API:

```jsx
import { View as DoxyView } from "@churchcenter/doxy";

<DoxyView padding={1} />
<DoxyView padding={[1, 2]} />
<DoxyView padding={[1, 2, 1]} />
<DoxyView padding={[1, 2, "5px"]} />
<DoxyView padding={1} paddingBottom={2} />
<DoxyView padding={{ small: 1, medium: [1, 2,1] }} />
```

Now consider what that looks like using the `space(unit)` function.
It can be used with any component, in any composition.

```jsx
import { space } from "@churchcenter/doxy/system";
import { RandoNPMViewWrapper } from "rando-npm-view-wrapper";

<RandoNPMViewWrapper
  style={{
    padding: space(1),
    paddingBottom: space(2),
    margin: `${space(1)} 2em`
  }}
/>

<SomeMediaProvider>
  {media =>  
    <View
      style={{
        padding: media.small ? space(1) : space(2),
        paddingBottom: space(2)
        margin: `${space(1)} 2em`
      }}
    />
  }
</SomeMediaProvider>
```

And finally this method can take advantage of `Stylesheet.create` for improved rendering performance.

```js
import { Stylesheet } from "react-native";

let styles = Stylesheet.create({
  someView: {
    padding: space(1),
    paddingBottom: space(2),
    margin: `${space(1)} 2em`,
  }
})

<View style={styles.someView}>...</View>
```

### What is left to explore?
The `doxy/button` is very complex.
It does a lot to accomplish the gradient effect that I'm not totally confortable porting to the web.

In our next effort, I'd like to see if we can export the simpler buttons first.

### What's next?
* Continue building the [app-local Doxy](https://github.com/ministrycentered/ChurchCenterApp/tree/next/app/components/doxy)
* Continue developing Josh's [CSS Doxy clone](https://github.com/ministrycentered/giving/blob/master/app/assets/stylesheets/church_center/views/_ccapp.scss) for web apps.
* Wait for [api.churchcenter.com](api.churchcenter.com/) to be developed as a first-class backend for Doxy components.

---

# doxy
Cross-platform Church Center Components
