import { FC } from "react";
import { useTranslation } from "react-i18next";
import { SPECIES_OPTIONS, STATUS_OPTIONS } from "../../constants/filters";
import { useCharacterFilters } from "../../stores/useCharacterFilters.store";
import SelectC from "../atoms/SelectC";
import ResetButton from "../atoms/ResetButton";
import SortSelectC from "../atoms/SortSelectC";

type TFilters = {
  reset: () => void;
};

const Filters: FC<TFilters> = ({ reset }) => {
  const { t } = useTranslation();

  const {
    statusFilter,
    speciesFilter,
    sortField,
    sortOrder,
    setStatusFilter,
    setSpeciesFilter,
    setSortField,
    setSortOrder,
  } = useCharacterFilters();

  return (
    <div className="flex flex-col z-0 mb-[-20px] md:flex-row  gap-6   sm:w-md md:w-lg lg:w-2xl xl:w-4xl 2xl:w-5xl h-fit overflow-hidden mx-auto p-8  rounded-xl border border-[#8892B0] bg-gradient-to-t from-[#112342] to-[#081427] shadow-lg">
      <SelectC
        label={t("species")}
        value={speciesFilter as string}
        onChange={setSpeciesFilter as (value: string) => void}
        options={SPECIES_OPTIONS}
      />

      <SelectC
        label={t("status")}
        value={statusFilter as string}
        onChange={setStatusFilter as (value: string) => void}
        options={STATUS_OPTIONS}
      />

      <ResetButton reset={reset} />

      <SortSelectC
        label={t("sort_by")}
        value={sortField || ""}
        onChange={(val) => setSortField(val as "name" | "origin")}
        options={[
          { value: "", label: t("sort_by") },
          { value: "name", label: t("name") },
          { value: "origin", label: t("origin") },
        ]}
      />

      <SortSelectC
        label={t("order")}
        value={sortOrder || ""}
        onChange={(val) => setSortOrder(val as "asc" | "desc")}
        options={[
          { value: "", label: t("order") },
          { value: "asc", label: "A → Z" },
          { value: "desc", label: "Z → A" },
        ]}
      />
    </div>
  );
};

export default Filters;
