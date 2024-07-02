import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="w-full ml-28">
      <Box sx={{ width: "80%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="inherit"
            indicatorColor="secondary"
            aria-label="basic tabs example"
            sx={{
              "& .MuiTab-root": {
                color: "black", // Default color for the tabs
                fontWeight: "bold", // Bold font for the tabs
              },
              "& .Mui-selected": {
                color: "#46A358", // Color of the selected tab
                fontWeight: "bold", // Bold font for the selected tab
              },
              "& .MuiTabs-indicator": {
                backgroundColor: "#46A358", // Color of the indicator
              },
            }}
          >
            <Tab label="Product Description" {...a11yProps(0)} />
            <Tab label="Reviews(19)" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <p className="leading-7 text-[#727272]">
            your plants off the ground. The ceramic cylinder planters come with
            a wooden stand to help elevate your plants off the ground. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla
            augue nec est tristique auctor. Donec non est at libero vulputate
            rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus
            mi, vulputate adipiscing cursus eu, suscipit id nulla. <br />{" "}
            Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat
            sem, quis fermentum turpis eros eget velit. Donec ac tempus ante.
            Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis
            vulputate, sapien libero hendrerit est, sed commodo augue nisi non
            neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in
            accumsan elit odio quis mi. Cras neque metus, consequat et blandit
            et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet
            ligula euismod eget. The ceramic cylinder planters come with a
            wooden stand to help elevate your plants off the ground. The ceramic
            cylinder planters come with a wooden stand to help elevate
          </p>
          <p className=" font-bold leading-9 text-[#3D3D3D]">Living Room:</p>
          <p className="text-[#727272]">
            The ceramic cylinder planters come with a wooden stand to help
            elevate your plants off the ground. The ceramic cylinder planters
            come with a wooden stand to help elevate your plants off the ground.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <p className=" font-bold leading-9 text-[#3D3D3D]">Dining Room:</p>
          <p className="text-[#727272]">
            The benefits of houseplants are endless. In addition to cleaning the
            air of harmful toxins, they can help to improve your mood, reduce
            stress and provide you with better sleep. Fill every room of your
            home with houseplants and their restorative qualities will improve
            your life.
          </p>

          <p className=" font-bold leading-9 text-[#3D3D3D]">Office:</p>
          <p className="text-[#727272]">
            The ceramic cylinder planters come with a wooden stand to help
            elevate your plants off the ground. The ceramic cylinder planters
            come with a wooden stand to help elevate your plants off the ground.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}></CustomTabPanel>
      </Box>
    </div>
  );
}
