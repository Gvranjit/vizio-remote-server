import { Handler } from "express";
import { Command } from "../constants/commands";
import { tv } from "..";

export const command: Handler = async (req, res, next) => {
  const body: { command: Command } = req.body;
  try {
    let tvResponse;
    switch (body.command) {
      case Command.POWER_ON:
        tvResponse = await tv.control.power.on();
        break;
      case Command.POWER_OFF:
        tvResponse = await tv.control.power.off();
        break;
      case Command.POWER_TOGGLE:
        tvResponse = await tv.control.power.toggle();
      case Command.VOLUME_DOWN:
        tvResponse = await tv.control.volume.down();
        break;
      case Command.VOLUME_UP:
        tvResponse = await tv.control.volume.up();
        break;
    }
    res.json(tvResponse);
    //We might need to handle the error thrown by TV but right now i haven't received any such error
  } catch (error) {
    console.log(error);
    res.send("SOMETHING WENT WRONG");
  }
};
