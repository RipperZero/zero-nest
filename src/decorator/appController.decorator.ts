import {
  applyDecorators,
  Controller,
  ControllerOptions,
  UseGuards,
} from "@nestjs/common";

const AppControllerDecorator = ({
  controllerParam,
  useGuardsParam,
}: {
  controllerParam?: string | string[] | ControllerOptions;
  useGuardsParam?: Parameters<typeof UseGuards>[0];
}) => {
  return applyDecorators(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore:next-line
    Controller(controllerParam),
    UseGuards(useGuardsParam),
  );
};

export { AppControllerDecorator };
