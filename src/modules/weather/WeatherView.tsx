import { Vnode } from 'mithril';

interface VNodeAttrs {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    temp_max: number;
    temp_min: number;
  };
  sys: {
    sunrise: number;
  };
}

export const WeatherView = () => {
  return {
    view: (vnode: Vnode<VNodeAttrs>) => {
      console.log(vnode.attrs);
      const { name, main, sys } = vnode.attrs;
      return (
        <>
          <p>Current location: {name}</p>
          <table border="1">
            <tbody>
              <tr>
                <th>Current location</th>
                <td>{name}</td>
              </tr>
              <tr>
                <th>Temperature</th>
                <td>
                  {main.temp}&deg;C (feels like {main.feels_like}&deg;C)
                </td>
              </tr>
              <tr>
                <th>Max/min</th>
                <td>
                  {main.temp_max}&deg;C / {main.temp_min}&deg;C
                </td>
              </tr>
              <tr>
                <th>Sunrise</th>
                <td>{sys.sunrise}</td>
              </tr>
            </tbody>
          </table>
        </>
      );
    },
  };
};
