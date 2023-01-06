import { defineComponent, createVNode, openBlock, createElementBlock, createTextVNode } from "vue";
const __uno = "";
const props = {
  color: {
    type: String,
    default: "blue"
  },
  size: {
    type: String,
    default: "medium"
  },
  plain: {
    type: Boolean,
    default: false
  },
  round: {
    type: Boolean,
    default: false
  },
  icon: {
    type: Boolean,
    default: false
  }
};
const size = {
  small: {
    x: 1,
    y: 2,
    text: "sm"
  },
  medium: {
    x: 2,
    y: 4,
    text: "base"
  },
  large: {
    x: 3,
    y: 6,
    text: "lg"
  }
};
const Button = defineComponent({
  name: "SButton",
  props,
  setup(props2, {
    slots
  }) {
    return () => createVNode("button", {
      "class": `
        ${props2.icon ? "" : `py-${size[props2.size].x} px-${size[props2.size].y}`}
        ${props2.round ? "rounded-full" : "rounded-lg"}
        shadow-md
        bg-${props2.color}-${props2.plain ? "100" : "500"}
        border-${props2.color}-500
        border-solid
        text-${size[props2.size].text}
        hover:border-${props2.color}-${props2.plain ? "500" : "400"}
        ${props2.plain ? `text-${props2.color}-500` : "text-white"}
        transition duration-300 ease-in-out transform hover:scale-105
        cursor-pointer
        hover:bg-${props2.color}-${props2.plain ? "500" : "400"}
        hover:text-white
        m-1
      `
    }, [slots.default ? slots.default() : ""]);
  }
});
const _sfc_main = {
  name: "SFCButton",
  methods: {
    click() {
      console.log(this);
    },
    test() {
      console.log("test");
    }
  }
};
const _export_sfc = (sfc, props2) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props2) {
    target[key] = val;
  }
  return target;
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", {
    onClick: _cache[0] || (_cache[0] = (...args) => $options.click && $options.click(...args))
  }, "SFC Button");
}
const SFCButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const JSXButton = defineComponent({
  name: "JSXButton",
  render() {
    return createVNode("button", {
      "onClick": () => this.click()
    }, [createTextVNode("TSX Button")]);
  },
  methods: {
    click() {
      console.log(this);
    }
  }
});
const entry = {
  install(app) {
    app.component(Button.name, Button);
    app.component(SFCButton.name, SFCButton);
    app.component(JSXButton.name, JSXButton);
  }
};
export {
  JSXButton,
  Button as SButton,
  SFCButton,
  entry as default
};
//# sourceMappingURL=smarty-ui.esm.js.map
