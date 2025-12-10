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
    // @ts-expect-error:next-line
    Controller(controllerParam),
    // @ts-expect-error:next-line
    UseGuards(useGuardsParam),
  );
};

export { AppControllerDecorator };
