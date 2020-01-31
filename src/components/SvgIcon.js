import React from "react";

const SvgIcon = ({
  name = "",
  style = {},
  fill = "#000",
  viewBox = "",
  width = "100%",
  className = "",
  height = "100%"
}) => (
  <svg
    width={width}
    style={style}
    height={height}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1000 1000"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
   <g id="Layer_2">
	<circle className="st0" cx="500" cy="500" r="490"/>
</g>
<g id="Layer_3_copy">
	<g>
		<line className="st1" x1="227.8" y1="227.8" x2="466" y2="227.8"/>
		<line className="st2" x1="227.8" y1="227.8" x2="466" y2="227.8"/>
	</g>
	<line className="st3" x1="772.5" y1="227.5" x2="534.4" y2="227.5"/>
	<line className="st3" x1="556.2" y1="444.2" x2="719.2" y2="281.2"/>
	<line className="st3" x1="448.2" y1="552.2" x2="276.7" y2="723.7"/>
	<line className="st3" x1="227.5" y1="772.5" x2="466.3" y2="772.5"/>
	<line className="st3" x1="534.4" y1="772.5" x2="738.9" y2="772.5"/>
	<line className="st3" x1="762.9" y1="741.1" x2="762.9" y2="560.5"/>
	<line className="st3" x1="534.4" y1="534.1" x2="738.5" y2="534.1"/>
	<line className="st3" x1="500.3" y1="261.9" x2="500.3" y2="465.9"/>
	<line className="st3" x1="500.3" y1="738.7" x2="500.3" y2="534.1"/>
</g>
  </svg>
);
export default SvgIcon;